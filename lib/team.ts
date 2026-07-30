// Team member data extracted from UElement_Website.html

export interface TeamMember {
  name: string;
  initials: string;
  title: string;
  description: string;
  photo: string;
  linkedIn: string;
}

export interface Advisor {
  name: string;
  linkedIn: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Chaitanya Vijay Ghate (CVG)',
    initials: 'CG',
    title: 'Co-founder & Chief Executive Officer',
    description:
      "Leads UElement's strategy and programs, and represents the company's quantum security and deeptech narrative in public forums and national media.",
    photo: '/images/team/cvg.jpg',
    linkedIn: 'https://www.linkedin.com',
  },
  {
    name: 'Kaustubh Narwade',
    initials: 'KN',
    title: 'Co-founder & Chief Product Officer',
    description:
      'Owns the MainSTAY product line, including the Vizor observability, security and GRC fabric.',
    photo: '/images/team/kaustubh.jpg',
    linkedIn: 'https://www.linkedin.com',
  },
  {
    name: 'Rohit Shrivastava',
    initials: 'RS',
    title: 'President',
    description: 'Drives company operations and go-to-market execution across regions.',
    photo: '/images/team/rohit.jpg',
    linkedIn: 'https://www.linkedin.com',
  },
  {
    name: 'Niraj Sanghvi',
    initials: 'NS',
    title: 'Chief Financial Officer',
    description: 'Leads finance, governance, and corporate structuring.',
    photo: '/images/team/niraj.jpg',
    linkedIn: 'https://www.linkedin.com',
  },
  {
    name: 'Bhagyashree Pancholi',
    initials: 'BP',
    title: 'General Counsel',
    description: 'Leads legal affairs, contracts, and regulatory alignment.',
    photo: '/images/team/bhagyashree.jpg',
    linkedIn: 'https://www.linkedin.com',
  },
  // {
  //   name: 'Anoop Kumar',
  //   initials: 'AK',
  //   title: 'VP Engineering, Service Delivery',
  //   description: 'Leads engineering delivery across platform engagements.',
  //   photo: '/images/team/anoop.jpg',
  //   linkedIn: 'https://www.linkedin.com',
  // },
  {
    name: 'Uday Wad',
    initials: 'UW',
    title: 'VP R&D, Quantum & AI',
    description: 'Leads research across quantum technologies and applied AI.',
    photo: '/images/team/uday.jpg',
    linkedIn: 'https://www.linkedin.com',
  },
  // {
  //   name: 'Hiren Mehta',
  //   initials: 'HM',
  //   title: 'Chairman',
  //   description: "Chairs the board and leads UDTechs, UElement's parent group.",
  //   photo: '/images/team/hiren.jpg',
  //   linkedIn: 'https://www.linkedin.com',
  // },
];

export const advisors: Advisor[] = [
  // { name: 'Urbasi Sinha', linkedIn: 'https://www.linkedin.com' },
  { name: 'Utsav Banerjee', linkedIn: 'https://www.linkedin.com' },
  { name: 'Raajat Agarwal', linkedIn: 'https://www.linkedin.com' },
];
