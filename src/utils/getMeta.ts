import { _siteUrl } from './constants';
import prisma from '@/app/db/client';
interface PageMeta {
  title: string;
  description: string;
}

export const getPageMeta = (slug: string): PageMeta => {
  let title = '';
  let description = '';

  // Logic to find the title and description based on the slug
  switch (slug) {
    case '/about':
      title = "GoGreen - We're Passionate About Eco-Friendly Cleaning";
      description =
        'Meet the dedicated experts at GoGreen. Passionate professionals shaping a cleaner, greener future through eco-friendly & bespoke cleaning solutions.';
      break;
    case '/contact':
      title =
        'Contact GoGreen - Your Partner for Eco-Friendly Cleaning Solutions';
      description =
        'Connect with GoGreen for tailored eco-friendly cleaning solutions. Reach out today to elevate cleanliness with sustainability. Your green partner awaits!';
      break;
    case '/our-journey':
      title = 'GoGreen - A Legacy of Sustainable Cleanliness';
      description =
        'Providing Edmonton with sustainable cleaning excellence for over a decade. From inception to innovation, discover our commitment to a cleaner, greener future.';
      break;
    case '/our-technologies':
      title = 'GoGreen - Providing Clean Through Innovation';
      description =
        "Learn more about GoGreen's cutting-edge cleaning technology. Explore innovations driving eco-friendly solutions for a brighter, cleaner future.";
      break;
    case '/services':
      title = 'GoGreen With Tailored Cleaning Services';
      description =
        "Discover GoGreen's tailored eco-friendly cleaning services. Elevate cleanliness with precision and sustainability. Explore solutions for a greener future.";
      break;
    case '/services/integrated-facility':
      title = 'Discover GoGreen Integrated Facility Solutions';
      description =
        "Explore GoGreen's custom solutions for integrated facility services. Tailored excellence to elevate cleanliness, efficiency, and sustainability.";
      break;
    case '/services/specialized':
      title = "Explore GoGreen's Specialized Cleaning Solutions";
      description =
        "Discover GoGreen's expertise in specialized cleaning solutions. Tailored excellence for unique environments, ensuring the highest standard of cleanliness.";
      break;
    case '/services/cleaning':
      title = "GoGreen - Edmonton's Premier Cleaning Service";
      description =
        "Elevate cleanliness with GoGreen's unique cleaning services. Meticulous & tailored cleaning solutions for a spotless environment.";
      break;
    case '/services/sanitization':
      title = "GoGreen's Disinfection and Sanitary Cleaning Services";
      description =
        "Experience the power of GoGreen's one-time and routine disinfection services. Prioritize ongoing safety with our meticulous, eco-friendly cleaning.";
      break;
    case '/services/environmental':
      title = "Go Green with GoGreen's Environmental Services";
      description =
        "Trust GoGreen for comprehensive environmental services. From waste utilization to eco-friendly practices, we're committed to a greener future.";
      break;
    case '/services/post-construction':
      title = 'GoGreen Offers Comprehensive Post-Construction Cleanup';
      description =
        'Experience meticulous post-construction cleanup with GoGreen. From debris removal to deep cleaning, we ensure a safe and tidy environment.';
      break;
    case '/services/commercial-floor-cleaning':
      title = 'Elevate Spaces with GoGreen Commercial Floor Cleaning';
      description =
        "Elevate your space with GoGreen's commercial floor cleaning. Meticulous services ensure pristine floors, creating a welcoming environment.";
      break;
    case '/services/outdoor-building-maintenance':
      title = 'GoGreen - Eco Outdoor Building Maintenance';
      description =
        "Revitalize exteriors with GoGreen's eco-friendly maintenance services. From pressure washing to window cleaning, we ensure a sparkling facade.";
      break;
    case '/industries/commercial':
      title = 'Expert Commercial Cleaning - GoGreen';
      description =
        "Transform commercial spaces with GoGreen's services. From offices to retail stores and shopping centers, we elevate cleanliness and professionalism.";
      break;
    case '/industries/educational':
      title = 'Choose GoGreen for Clean Learning Environments';
      description =
        'GoGreen creates enlightened environments for education. Tailored cleaning services for higher education institutions, schools, and specialized courses.';
      break;
    case '/industries/industrial':
      title = 'GoGreen - Elevate Industrial Clean';
      description =
        'GoGreen delivers specialized cleaning for industrial sectors. From manufacturing to food plants and more, we ensure hygiene and efficiency.';
      break;
    case '/industries/institutional':
      title = 'Janitorial Excellence for Institutions - GoGreen';
      description =
        'GoGreen specializes in institutional cleaning, from government buildings to financial institutions and municipalities. Explore our tailored solutions.';
      break;
    case '/industries/hospitality':
      title =
        'Environmentally Friendly Hospitality Cleaning Services - GoGreen';
      description =
        'GoGreen transforms hospitality spaces. Immaculate cleaning for hotels, resorts, and event venues. Elevate guest experiences with our janitorial services.';
      break;
    case '/industries/healthcare':
      title = 'Comprehensive and Compliant Healthcare Cleaning - GoGreen';
      description =
        'GoGreen provides specialized cleaning for healthcare settings. For hospitals, long-term care centres, labs, and medical offices, we prioritize hygiene.';
      break;
    case '/industries/recreational':
      title = 'Janitorial Service for Rec Centres - Go Green';
      description =
        "Revitalize recreational spaces with GoGreen's expert cleaning. From gyms to stadiums and leisure centers, we ensure cleanliness and a healthy environment.";
      break;
    case '/blog':
      title = 'GoGreen - Learn More About Eco-Friendly Cleaning';
      description =
        'Explore the GoGreen blog for insightful articles on eco-friendly cleaning, sustainability, and industry trends. Dive into a greener and cleaner future with us.';
      break;
    case '/privacy':
      title = 'GoGreen - Privacy Information';
      description =
        "Explore GoGreen's commitment to your privacy. Learn how we protect your data and ensure a secure online experience. Trust in transparency.";
      break;
    case '/terms':
      title = 'GoGreen - Terms Page';
      description =
        "Navigate GoGreen's terms page for a clear understanding of our services, policies, and commitments.";
      break;
    default:
      title = 'GoGreen Facilities Services - Edmonton Janitorial Services';
      description =
        'Discover eco-friendly excellence with GoGreen! We offer tailored and environmentally conscious cleaning services in Edmonton and surrounding areas.';
      break;
  }

  console.log('slug', slug);
  console.log('title', title);
  return { title, description };
};

export const getArticleMeta = async (slug: string[]) => {
  // Logic to find the title and description based on the slug
  const Article = await prisma.article.findUnique({
    where: {
      URL: slug[slug.length - 1]
    },
    select: {
      title: true,
      excerpt: true,
      image: true
    }
  });

  return {
    title: Article?.title || '',
    description: Article?.excerpt || '',
    image: Article?.image || '',
    url: `${_siteUrl}/blog/${slug.join('/')}`
  };
};
