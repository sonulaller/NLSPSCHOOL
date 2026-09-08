import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from '@/pages/home';
import AboutPage from '@/pages/about';
import TeachersPage from '@/pages/teachers';
import SMCPage from '@/pages/smc';
import FeeStructurePage from '@/pages/fee-structure';
import FacilitiesPage from '@/pages/facilities';
import GalleryPage from '@/pages/gallery';
import AdmissionsPage from '@/pages/admissions';
import ContactPage from '@/pages/contact';
import NoticeBoardPage from '@/pages/notice-board';
import AcademicsPage from '@/pages/academics';
import NotFound from '@/pages/not-found';
import ChatWidget from '@/components/layout/ChatWidget';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/teachers" component={TeachersPage} />
      <Route path="/smc-members" component={SMCPage} />
      <Route path="/facilities" component={FacilitiesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/notice-board" component={NoticeBoardPage} />
      <Route path="/fee-structure" component={FeeStructurePage} />
      <Route path="/academics" component={AcademicsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <ChatWidget />
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
