interface ISocial {
  github: string;
  twitter?: string;
}

interface IMetaDefault {
  title: string;
  description: string;
  keywords: string[];
  social: ISocial;
}

export const siteMetaDefault: IMetaDefault = {
  title: "Jovan Lanutan",
  description: "Jovan Lanutan Portfolio",
  keywords: [
    "Jovan Lanutan",
    "Jovan's Portfolio",
    "Jovan's Website",
    "Blog",
    "Software Developer",
    "Web Developer",
  ],
  social: {
    github: "https://github.com/tan911",
  },
};
