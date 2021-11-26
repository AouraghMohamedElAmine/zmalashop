import React from "react";
import { Card } from "react-bootstrap";

function HomeScreenLoader() {
  return (
    <>
      <Card className="my-3 p-3 h-100">
        
        <div className="skeleton-image skeleton"></div>
 
          <div className="skeleton-text skeleton"></div>
          <div className="skeleton-text skeleton"></div>
          <div className="skeleton-text skeleton"></div>
 
        <div className="skeleton-text skeleton"></div>
      </Card>
    </>
  );
}

export default HomeScreenLoader;
