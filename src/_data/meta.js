export const url = process.env.URL || 'http://localhost:8080';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Laundry';
export const siteDescription = 'Laundry site based on Eleventy';
export const siteType = 'Person'; // schema
export const locale = 'id';
export const lang = 'id';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Davi Ernest Pradipta',
  avatar: '/icon-512x512.png',
  email: 'daviernestpradipta@gmail.com',
  website: 'https://www.daviernest.com'
};
export const creator = {
  name: 'Davi Ernest Pradipta',
  email: 'daviernestpradipta@gmail.com',
  website: 'https://www.daviernest.com'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg';
export const themeColor = '#c832c8';
export const themeLight = '#ffffff';
export const themeDark = '#000000';
export const opengraph_default = '/assets/images/template/opengraph-default.jpg';
export const opengraph_default_alt = "Visible content: An Eleventy starter with CUBE CSS, Cube CSS, Every Layout, Design Tokens and Tailwind for uitility classes. A workflow for building modern and resilient websites, introduced by Andy Bell's project buildexcellentwebsit.es"; // alt text for default meta image"
export const blog = {
  name: 'My Web Development Blog',
  description: 'Tell the word what you are writing about in your blog. It will show up on feed readers.',
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = false;
