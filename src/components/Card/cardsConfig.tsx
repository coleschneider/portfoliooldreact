import BlendLogo from '../../assets/images/BlendLogo.png'
import BlendLogoSmall from '../../assets/images/BlendLogoSmall.jpg'
import DanMillerATI from '../../assets/images/DanMillerATI.png'
import DanMillerATISmall from '../../assets/images/DanMillerATISmaller.jpg'
import ORCASPreview from '../../assets/images/ORCASPreview.png'
import ORCASPreviewSmall from '../../assets/images/ORCASPreviewSmall.jpg'

export const cardsConfig: Card[] = [
  {
    id: '1',
    description: ['Software ', 'Engineer ', 'Internship'],
    cardImage: BlendLogo,
    placeholder: BlendLogoSmall,
    details: [
      {
        title: `Blend (Software Engineer Internship)`,
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
  {
    id: '2',
    description: ['Non ', '-', 'Profit ', 'Website'],
    cardImage: ORCASPreview,
    placeholder: ORCASPreviewSmall,
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
  {
    id: '3',
    description: ['Dan ', 'Miller ', 'ATI '],
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
