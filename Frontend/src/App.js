import React, { Fragment, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import ScrollToTop from "./components/ScrollToTop";

// Admin imports
import AdminLogin from "./AdminDashboard/pages/AdminLogin";
import AdminDashboard from "./AdminDashboard/pages/AdminDashboard";
import PrivateRoute from "./AdminDashboard/components/PrivateRoute";
import HomeDashboard from "./AdminDashboard/components/Home";
import ContactList from "./AdminDashboard/components/ContactList";
import SubscriptionList from "./AdminDashboard/components/SubscriptionList";
import VisitorsList from "./AdminDashboard/components/VisitorsList";
import BrandTwo from "./components/brand/BrandTwo";
import MobileMenu from "./components/header/MobileMenu";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <Fragment>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Data Science, Analytics, Data, sass, software company"
        />
        <meta
          name="description"
          content="Sinco - Data Science & Analytics React Template is designed especially for the agency, multipurpose and business and those who offer business-related services."
        />
        <meta property="og:site_name" content="Sinco" />
        <meta
          property="og:url"
          content="https://themeforest.net/user/creativegigs"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sinco - Data Science & Analytics React Template"
        />
      </Helmet>

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Public Site */}
          <Route path="/*" element={<AppRouter />} />
          <Route path="mobile-menu" element={<MobileMenu />}></Route>

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          
          <Route path="/admin-dashboard" element={<PrivateRoute />}>
            <Route element={<AdminDashboard />}>
              <Route index element={<HomeDashboard />} />
              <Route path="admin-home" element={<HomeDashboard />} />
              <Route path="admin-contact" element={<ContactList />} />
              <Route path="admin-subscribe" element={<SubscriptionList />} />
              <Route path="admin-visitors" element={<VisitorsList />} />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
