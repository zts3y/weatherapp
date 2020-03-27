import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
    Switch,
    useLocation
  } from "react-router-dom";

const AnimatedRoutes = ({ children, exitBeforeEnter = true, initial=true}) => {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter={exitBeforeEnter}>
            <Switch location={location} key={location.pathname}>
                {children}
            </Switch>
        </AnimatePresence>
    )
}

export default AnimatedRoutes