import BlendLogo from '../../assets/images/BlendLogo.png'
import BlendLogoSmall from '../../assets/images/BlendLogoSmall.jpg'
import DanMillerATI from '../../assets/images/DanMillerATI.png'
import DanMillerATISmall from '../../assets/images/DanMillerATISmaller.jpg'
import ORCASPreview from '../../assets/images/ORCASPreview.png'
import ORCASPreviewSmall from '../../assets/images/ORCASPreviewSmall.jpg'

export const cardsConfig: Card[] = [
  {
    id: '1',
    description: 'Blend',
    cardImage: BlendLogo,
    placeholder: BlendLogoSmall,
    details: [
      {
        title: `Blend (Software Engineer Internship)`,
        body: `I took a semester off at Pepperdine to intern at Blend from September through December. I worked with the engineering team on multiple projects frontent and backend. All projects were 100% covered by unit, integration, and E2E tests. The projects I worked on improving and implementing new login workflows for various clients, banks, and financial instutions.`,
      },
      {
        title: `Development`,
        body: `At Blend, I communicated with project managers to achieve goals set during ssprint planning and followed up with these goals during stand up. I also worked with design, product, and legal teams to meet deadlines in ways that distributed engineer workload and preserved scalability of the app. I refactored banking login apps for improved routing and mobile responsive layout. I also built a custom frontend tracking system that reported events to improve analytics.`,
      },
      {
        title: `Testing`,
        body: `Achieved 100% coverage with jest in all frontend unit and integration tests.`,
      },
    ],
  },
  {
    id: '2',
    description: 'ORCA Seniors',
    cardImage: ORCASPreview,
    placeholder: ORCASPreviewSmall,
    details: [
      {
        title: `September - December Blend (Software Engineer Internship)`,
        body: `During my first Senior semester at Pepperdinue University, I worked with a team of other students to improve the current state of a non profit organization. We we're assigned the ORCAS who's mission is to build a better senior center for the community of Oxnard, CA. My team and I presented them with multiple new strategies to help achieve their goal, one of the being a new website that I woked on for the duration of the project.`,
      },
      {
        title: `Development`,
        body: `I developed the site using React, emphasizing the importance of the ORCAs goals and collaborating with them to ensure they ended up with a product that fit their mission, vision, and values. This was the first progressive site I had worked on by myself and had a lot of fun implementing offline capabilities of service workers. I focused on alerting the user with various prompts so navigating the app was simple and also directed. I also implemented the email eventing system that subscribes users through MailChimp by creating various AWS Lambda functions.`,
      },
      {
        title: `Testing`,
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel, venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae, euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.`,
      },
      {
        title: `Deployment`,
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel, venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae, euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.`,
      },
    ],
  },
  {
    id: '3',
    description: 'Dan Miller ATI',
    cardImage: DanMillerATI,
    placeholder: DanMillerATISmall,
    details: [
      {
        title: `September - December Blend (Software Engineer Internship)`,
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel, venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae, euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.`,
      },
      {
        title: `Development`,
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel, venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae, euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.`,
      },
      {
        title: `Testing`,
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum libero, ornare sit amet tempor vel, venenatis non urna. Aliquam in leo arcu. Etiam rutrum ante libero, ut sodales arcu aliquam a. Integer bibendum ornare lacinia. Sed non tellus vel purus tempor hendrerit. Nullam vulputate mollis odio, ut laoreet purus sagittis vel. Proin feugiat tristique purus a imperdiet. Nunc at urna congue, tempus est vitae, euismod mi. Phasellus in est placerat, viverra odio eget, rhoncus justo.`,
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
