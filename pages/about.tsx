import Header from '../components/header'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import Layout from '../components/layout'
import CV from 'react-cv'

export default function AboutPage() {
    const router = useRouter()


    if (router.isFallback) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>
            <Container>
                <Header />
                <CV
                    personalData={{
                        name: 'Peter Krauß',
                        title: 'Engineering Director',
                        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQH2eiPhGDQoaw/profile-displayphoto-shrink_800_800/0/1652125523708?e=1663804800&v=beta&t=wblpJCE9mZNH15fUtlnzBP2pJhqMPvrRTHU0ziIhqJk',
                        contacts: [
                            { type: 'location', value: 'Oranienburg' },
                            { type: 'linkedin', value: 'https://www.linkedin.com/in/kraussdevelopment/' },
                            { type: 'twitter', value: 'https://twitter.com/pkatberlin' },
                            { type: 'github', value: 'https://github.com/raven-rwho/' }
                        ]
                    }}
                    sections={[
                        {
                            type: 'text',
                            title: 'Career Profile',
                            content: 'Father, husband and whatever is needed in the wild field of software development and building up organizations for it.',
                            icon: 'usertie'
                        }, {
                            type: 'experiences-list',
                            title: 'Experiences',
                            icon: 'archive',
                            items: [
                                {
                                    title: 'Director Product & Engineering Data',
                                    company: 'Axel Springer - National Media&Tech (formerly Spring)',
                                    description: 'Line management of 8 teams (55 ppl), budgetary and human responsibility, after building a Data Lake infrastructure in Petabyte scale now use the data for large scale personalization projects, conceptualization of Data Science (predictions by statistics, NLP, Deep Learning), Hiring, organizational structure, servant leader (enable&empower), Agile Coach, Agile Product Owner',
                                    companyWebSite: 'https://www.linkedin.com/company/asnmt/mycompany/',
                                    companyMeta: 'NMT is responsible for all german news media brands of Axel Springer (Welt&Bild)',
                                    datesBetween: '2020.08 - Present',
                                    descriptionTags: ['Hiring', 'Organizational Development', 'Recommendation Systems']
                                },
                                {
                                    title: 'Director Product & Engineering Data',
                                    company: 'Axel Springer - Spring',
                                    description: 'Building up the data dept. with the main task to democratize data and hire teams to utilize the data (Data Scientists, Data Engineers, DataOps, Fullstack Software Developers). The key metric for this task was the time until we were able to give a person or system access to data. We started with 6 weeks and now we are at 1 day. ',
                                    companyMeta: 'Spring is responsible for all german news media brands of Axel Springer (Welt&Bild)',
                                    datesBetween: '2018.8 - 2020.07',
                                    descriptionTags: ['Data Lake', 'Hiring', 'Organizational Development', 'Palantir Foundry', 'DataOps', 'Microservice']

                                },
                                {
                                    title: 'Android Team Lead',
                                    company: 'upday',
                                    description: 'Line management of up to 10 Android developers (also remote), budgetary and human responsibility, implementation and conceptualization of the upday mobile app (around 20 mio unique users), collaboration with Samsung (also in Korea), Dashboarding with Elastic Search and Grafana, implementing the CI Pipeline, on-call duty, Servant Leader (enable&empower)',
                                    companyWebSite: 'https://www.upday.com/home',
                                    companyMeta: "upday is Europe's most popular news app with a reach of more than 25 million monthly users in 34 countries",
                                    datesBetween: '2015.11 - 2018.07',
                                    descriptionTags: ['Hiring', 'Android', 'Rest', 'AWS', 'Spring Boot', 'Java']
                                },
                                {
                                    title: 'Software Developer (Full Stack)',
                                    company: 'upday',
                                    description: 'Developing of Ruby on Rails based API’s and consume them in the mobile app, implementing the CI Pipeline, on-call duty',
                                    companyWebSite: 'https://www.upday.com/home',
                                    companyMeta: "upday is Europe's most popular news app with a reach of more than 25 million monthly users in 34 countries",
                                    datesBetween: '2015.01 - 2015.10',
                                    descriptionTags: ['Ruby on Rails', 'Rest', 'AWS', 'Jenkins']

                                },
                                {
                                    title: 'Android Developer / Test Engineer',
                                    company: 'AS ideAS Engineering – Axel-Springer AG',
                                    description: 'Developing on several android mobile apps (1414, Berliner Morgenpost, Welt), Implementing automated tests and corresponding CI pipeline',
                                    companyWebSite: 'https://www.ideas-engineering.io/',
                                    datesBetween: '2013.07 - 2014.12',
                                    descriptionTags: ['Android', 'Ruby', 'Calabash', 'Jenkins']

                                },
                                {
                                    title: 'Research Fellow',
                                    company: 'UKJ',
                                    description: 'Basic research to develop guided minimal invasive surgery based on open MRI and laser based tracking',
                                    companyWebSite: 'https://www.uniklinikum-jena.de/idir/',
                                    datesBetween: '2012.01 - 2012.06',
                                    descriptionTags: ['Open MRI', 'Laser Tracking', 'C++', 'Qt', 'Boost']

                                },
                                {
                                    title: 'Research Fellow',
                                    company: 'Charité',
                                    description: 'Basic research to develop guided minimal invasive surgery based on open MRI and laser based tracking',
                                    companyWebSite: 'https://www.charite.de/service/pressemitteilung/artikel/detail/weltpremiere_an_der_charite_geburt_im_offenen_mrt/',
                                    datesBetween: '2011.04 - 2011.11',
                                    descriptionTags: ['Open MRI', 'Laser Tracking', 'C++', 'Qt', 'Boost']

                                }
                            ]
                        },
                        {
                            type: 'common-list',
                            title: 'Education',
                            icon: 'graduation',
                            items: [
                                {
                                    title: 'Computer Science (Diploma)',
                                    authority: 'Freie Universität Berlin',
                                    authorityWebSite: 'https://www.fu-berlin.de/'
                                }
                            ]
                        },
                        {
                            type: 'projects-list',
                            title: 'Projects',
                            description: 'Optional',
                            icon: 'tasks',
                            groups: [
                                {
                                    sectionHeader: 'Axel Springer - National Media&Tech',
                                    items: [
                                        { title: 'Auto Curation', description: 'Recommender System for the brands of NMT' },
                                    ]
                                },
                                {
                                    sectionHeader: 'Axel Springer - Spring',
                                    items: [
                                        { title: 'Deepthought', description: 'Palantir based data lake infrastructure for data democratization' },

                                    ]
                                },
                                {
                                    sectionHeader: 'Axel Springer - upday',
                                    items: [
                                        { title: 'Axel Springer Silicon Valley Fellowship', description: '8 weeks in the valley with collaboration with Pocket, Dropbox and Singularity University ' },
                                        { title: 'Collaboration with Samsung in Korea', description: 'Ensured the going live on all european Samsung devices on-site (Gumi - South Korea)' },
                                        { title: 'Contract negotiation with Samsung in Korea', description: 'Part of the contract negotiation on-site (Suwon - South Korea)' },
                                        { title: 'upday Android app', projectUrl: 'https://play.google.com/store/apps/details?id=de.axelspringer.yana&hl=en&gl=US', description: 'Part of the contract negotiation on-site (Suwon - South Korea)' },
                                    ]
                                }
                            ]
                        },
                        {
                            type: 'common-list',
                            title: 'Conferences & Certificates',
                            description: '',
                            icon: 'comments',
                            items: [
                                {
                                    title: 'AWS Certified Solutions Architect - Associate',
                                    authority: 'AWS',
                                    authorityWebSite: 'https://aw.certmetrics.com/amazon/public/verification.aspx',
                                    rightSide: '2018-2021'
                                },
                                {
                                    title: 'GTAC / 2015',
                                    authority: 'Google Tests Automation Conference',
                                    authorityWebSite: 'https://developers.google.com/google-test-automation-conference/2015',
                                    rightSide: 'invite only conference'
                                },
                                {
                                    title: 'Droidcon / 2014',
                                    authority: 'Mobile App Europe',
                                    authorityMeta: 'Speaker',
                                    rightSide: 'The ART of Calaba.sh'
                                },
                                {
                                    title: 'Droidcon / 2014',
                                    authority: 'Droidcon',
                                    authorityMeta: 'Speaker',
                                    authorityWebSite: 'https://www.youtube.com/watch?v=AihwHve0Zb0',
                                    rightSide: 'The ART of Calaba.sh'
                                },
                                {
                                    title: 'RSNA / 2010',
                                    authorityMeta: 'Speaker',
                                    rightSide: 'Problem oriented Learning / Live online collaboration'
                                }
                            ]
                        },
                        {
                            type: 'common-list',
                            title: 'Languages',
                            icon: 'language',
                            items: [
                                {
                                    authority: 'English',
                                    authorityMeta: 'Professional'
                                },
                                {
                                    authority: 'German',
                                    authorityMeta: 'Native'
                                }
                            ]
                        },
                        {
                            type: 'tag-list',
                            title: 'Skills Proficiency',
                            icon: 'rocket',
                            items: ['Agile', 'Organizational Development', 'Lean', 'Android', 'AWS', 'DevOps', 'Data Mesh', 'Whatever is needed']
                        },
                        {
                            type: 'tag-list',
                            title: 'Hobbies & Interests',
                            icon: 'cubes',
                            items: ['Time with my kids', 'Archery', 'Building stuff']
                        }
                    ]
                    }
                    branding={true} // or false to hide it.
                />
            </Container>
        </Layout>
    )
}