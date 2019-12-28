import BlendLogo from '../../assets/images/BlendLogo.png'
import BlendLogoSmall from '../../assets/images/BlendLogoSmall.jpg'
import DanMillerATI from '../../assets/images/DanMillerATI.png'
import DanMillerATISmall from '../../assets/images/DanMillerATISmaller.jpg'
import ORCASPreview from '../../assets/images/ORCASPreview.png'
import ORCASPreviewSmall from '../../assets/images/ORCASPreviewSmall.jpg'

export const cardsConfig: Card[] = [
  {
    id: 'blend',
    description: 'Blend',
    cardImage: BlendLogo,
    placeholder: BlendLogoSmall,
    position: 'Software Engineer (Intern)',
    link: 'https://blend.com',
    details: [
      {
        title: `Blend (Software Engineer Internship)`,
        body: `I took a semester off at Pepperdine to intern at Blend from September through December. I worked with the engineering team on multiple projects frontent and backend. All projects were 100% covered by unit, integration, and E2E tests. The projects I worked on improving and implementing new login workflows for various clients, banks, and financial instutions.`,
      },
      {
        title: `Development`,
        body: `At Blend, I communicated with project managers to achieve goals set during sprint planning and followed up with these goals during stand up. I also worked with design, product, and legal teams to meet deadlines in ways that distributed engineer workload and preserved scalability of the app. I refactored banking login apps for improved routing and mobile responsive layout. I also built a custom frontend tracking system that reported events to improve analytics.`,
      },
      {
        title: `Build Speed`,
        body: `At Blend, I worked on the "borrower" team for lending. Because we managed quite a bit of consumer-facing side of the app, we wanted to ensure quick loading times and an overall positive experience. The first thing I did to improve the build speed was upgrade Blend's webpack version from 2 to 4 so that we could take advantage of code-splitting and lazy-loading. The second thing I did was selectively import polyfills depending on the type of browser the user was on. The last thing I did was split the vendor assets into seperate chunks so that user's didn't download all of the app's assets on the initial page load.`,
      },
      {
        title: `Testing`,
        body: `Achieved 100% coverage with jest and enzyme in all frontend unit and integration tests. New workflows I added followed existing patterns where inputs sent from the backend were transformed, validated, and displayed on the frontend app through schemas. This also included 100% testing with mocha.`,
      },
    ],
  },
  {
    id: 'orca-seniors',
    description: 'ORCA Seniors',
    position: 'Developer for a non-profit',
    cardImage: ORCASPreview,
    placeholder: ORCASPreviewSmall,
    link: 'https://orcaseniors.org',
    details: [
      {
        title: `ORCA Seniors`,
        body: `During my first Senior semester at Pepperdine University, I worked with a team of other students to improve the current state of a non profit organization. We we're assigned the ORCAS who's mission is to build a better senior center for the community of Oxnard, CA. My team and I presented them with multiple new strategies to help achieve their goal, one of the being a new website that I woked on for the duration of the project.`,
      },
      {
        title: `Development`,
        body: `I developed the site using React, emphasizing the importance of the ORCAs goals and collaborating with them to ensure they ended up with a product that fit their mission, vision, and values. This was the first progressive site I had worked on by myself and had a lot of fun implementing offline capabilities of service workers. I focused on alerting the user with various prompts so navigating the app was simple and also directed. I also implemented the email eventing system that subscribes users through MailChimp by creating various AWS Lambda functions.`,
      },
      {
        title: `Testing`,
        body: `For testing the frontend code, I used jest and enzyme. I wrote unit-tests for each component and integration tests for higher level testing. I tested the AWS Lambda functions that sent newsletter information with mocha, and tied both suites of testing together to make sure one did not deploy without the other working properly.`,
      },
      {
        title: `Deployment`,
        body: `Because my team was working closely with the ORCAs on a daily basis, I wanted to make sure that I could make quick and safe changes to the app through continuous deployment. I set up two S3 buckets, one for logs and another to store the static assets from the webpack build. Then, I set up CircleCI build process that ran tests, built the app, and deployed it in parallel rather than running these steps sequentially. One issue I ran into with this was that Cloudfront was not properly invalidating the cache of assets in the S3 bucket and the service worker installed did not update. After looking into it, the solution was to simply set the max-age of new assets on the S3 bucket.`,
      },
    ],
  },
  {
    id: 'dan-miller-ati',
    description: 'Dan Miller ATI',
    position: 'Developer / Project',
    cardImage: DanMillerATI,
    placeholder: DanMillerATISmall,
    link: 'https://www.danmillerati.com',
    details: [
      {
        title: `Dan Miller ATI`,
        body: `This was a really fun site I got to work on for a friend that showcased his skill with auto, boat, and aircraft upholstery.`,
      },
      {
        title: `Development`,
        body: `The project was really fun because he had so many images that displayed his work and we didn't want to exclude any of them. The biggest issue I ran into was displaying all the images on his site in a way that didn't compromise the user experience. I ended up lazy loading all the images by measuring the dimensions of the user's screen relative to how far they scrolled down the page. I wrapped each image in a promise that resolved with the image's url and cached it by taking advantage of React's "useReducer" function. Then, in order to avoid passing props to deeply, I passed the state of the reducer to a context provider so that I could access the image's loading status from anywhere within the app.`,
      },
      {
        title: `Testing & Deployment`,
        body: `I used jest and enzyme to test the gallery component and the rest of the app. I used CircleCI to run test, build, and deployment tasks to ensure code quality through linting and formatting pre-deployment.`,
      },
    ],
  },
]

export const cardsById = cardsConfig.reduce(
  (acc, curr) => {
    acc[curr.id.toString()] = curr
    return acc
  },
  {} as {
    [k: string]: Card
  },
)

// export default cardsConfig
