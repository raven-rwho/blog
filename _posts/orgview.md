---
title: 'Orgchart'
excerpt: 'open source web app to visualize the state of an organization'
coverImage: '/assets/blog/orgview/orgchart.jpg'
date: '2023-05-11T05:35:07.322Z'
author:
  name: Peter Krauß
  picture: '/assets/blog/authors/peter.jpeg'
ogImage:
  url: '/assets/blog/orgview/orgchart.jpg'
---

# Orgchart

## Motivation
Visualizing the structure and specifically the changes in an organization is surprisingly hard. The default way, at least what I've seen so far, seems to be to draw some tree like structures and hide them in slide decks which are then again hidden somewhere in the deepest vaults of the intranet - ah and of course they never show the latest state. Since I'm responsible in my department to understand, deal and drive the organization I was looking for an easier and more accurate approach.
<br>
The result can be seen [here](https://orgchart-one.vercel.app/)

This tweet from Will Larson (https://twitter.com/Lethain/status/1462942061888368642?s=20) with this reply (https://twitter.com/che55er/status/1462982362086744070?)s=20 gave me the idea to just deal with this problem with glueing together some open source solutions and try them out. Which resulted in [orgchart](https://github.com/raven-rwho/orgchart).

## Introduction
Organizations, regardless of their size, often have complex structures with multiple teams, departments, and hierarchies. Keeping track of the organization's structure and understanding the relationships between different entities can be challenging. However, with the help of mind maps, we can visualize the organization's structure in a more intuitive and visual way. In this blog post, I'll present to you how to create a Next.js app that reads in an easy markdown file and uses the [Markmap library](https://markmap.js.org/) to generate mind maps which are visualizing the organization's structure. As the cherry on top - this app will also keep track the history of changes and easily visualize them and summarizes some metrics on top of the screen, which can be easily changed according to your needs.<br>

## Building the app around
Nowadays there are many ways to build a many ways to build a webapp. I have some experience in working with typescript and react and looked for a framework which allowed me to use node.js based code for the parsing and build-time related stuff and at the same time to build a sleek static page application which is rendered properly by the majority of browsers. 
I've ended up with using [next.js](https://nextjs.org/) - and I'm quite happy with it. The company behind it is [Vercel](https://vercel.com). They offer a nice and easy way to deploy your product and the free plan is more than enough for this purposes.

Check out their comprehensive documentation how to start with an application and let's jump to the more interesting parts.

## Parsing the markdown file
To use the markmap lib we need to pass in string which is formatted in markdown. But of course we do not change the string in the code of the webapp itself - means we need a way to parse a given file and read out the information from it. Surprisingly this is quite a deep rabbit hole in the worl of web development. Next.js is taking care that all code that is only needed at runtime (like parsing files) is not part of the production build which is rendered in the browser. Makes a lot of sense, because for the browser this would be waste and would blow up the size of the app. Unfortunately if you are like me and just start using this framework this can result in nasty error messages - to avoid them you need to use `getStaticProps` to tell next.js which parts of your app should be separated.

To properly parsing a markdown file you need a bunch more of stuff to interpret the information's properly like [gray-matter](https://github.com/jonschlinkert/gray-matter) i.e. But luckily next.js got us covered again with a comprehensive set of [examples](https://github.com/vercel/next.js/tree/canary/examples) which includes a [blog](https://github.com/vercel/next.js/tree/canary/examples/blog) implementation which is parsing md files to render them as articles - sounds familiar? 

So I piggybacked this solution and use it to parse the md file that contains the information about the org and some metadata directly in the `index.tsx`
```
export const getStaticProps = async () => {
  const allMaps = getAllMaps([
    'title',
    'slug',
    'date',
    'content',
  ])

  return {
    props: { allMaps },
  }
}
```
which is calling a function called `getAllMaps` to read in all files in a given folder - extracts the content and metadata by using the library grey-matter and returns the content as a consumable object

```
export function getMapBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(mapsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

```
Hooray - that is pretty much all we need - we read in not even one file, but a complete folder, which is quite useful for keeping track of the history and pass information over to our visualization layer in the ìndex.tsx`:

```
function Home({ allMaps }: Props) {
  const Component = MarkMap;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMap = allMaps[currentIndex]
```

## Automate the changes
To keep track on the changes on the org as easy as possible I've put some effort in automate as much as possible. 
The process looks in the moment like this:

1. Change the markdown file
2. push the changes
3. done 

What happens in the background? There is a github action which first checks if there were changes on the `map.md`file. If this was the case, it is copying the file over to the `_maps` folder and is adding the timestamp to the filename. Next it is adding the necessary meta infos, just the title of the org and the date.

```

      - name: Copy file
        if: steps.changed-map.outputs.changed == 'true'
        run: |
          MAP_FOLDER="map/"
          MAPS_FOLDER="_maps/"
          FILE_NAME="data_section.md"
          TODAY=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
          NEW_FILE_NAME="${TODAY}-${FILE_NAME}"
          cp "${MAP_FOLDER}${FILE_NAME}" "${MAPS_FOLDER}${NEW_FILE_NAME}"
          echo -e "---\ntitle: 'Data Section'\ndate: '${TODAY}'\n---\n\n$(cat ${MAPS_FOLDER}${NEW_FILE_NAME})" > ${MAPS_FOLDER}${NEW_FILE_NAME}
```
The next step of the action is committing the newly created version back to the repo.
Lastly the tests are executed, the app is build and deployed - in this case to Vercel, via `next`cli.

## Testing
I hate regex - not sure how you feel about them. I find them extremely hard to read and quite error prone - but they are quite easy to test. This is what the only file in the `__tests__`folder is for. If you plan to add other professions or get rid of some of the cards - just go to `utils/stringUtils.ts` but also keep in mind to refactor the tests afterwards. By the way, most of the tests were created by chat-gpt :-)

## Give me the code

You're welcome - check out my [Github repo](https://github.com/raven-rwho/orgchart)

## Conclusion
For now this little tool works quite well in my department to keep everyone informed about the changes in the org. If you have ideas how to improve it - I'm happy to answer questions or accept pull requests.
