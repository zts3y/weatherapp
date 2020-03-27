import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
    Route,
    Switch,
    Redirect
  } from "react-router-dom";

  const MountTransition = ({
    children,
    slide = 0,
    slideUp = 0,
  }) => (
    <motion.div
      exit={{ opacity: 0, x: slide, y: slideUp }}
      initial={{ opacity: 0, x: slide, y: slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  )

const RouteTransition = ({ children, exact = false, path, slide = 0, slideUp = 0, ...rest}) => {
    return (
        <Route exact={exact} path={path} {...rest}>
            <MountTransition slide={slide} slideUp={slideUp}>
                {children}
            </MountTransition>
        </Route>
    )
}

export default RouteTransition
