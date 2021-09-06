import React from "react";
import Button from "react-bootstrap/Button";

const EnergyControlPanel = (props) => {
  // change style of selected button
  const isSelected = (idx) => {
    if (!props.activeRequest) {
      return false;
    }

    if (idx === props.activeRequest.index) {
      return true;
    }
    return false;
  };

  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 className="h2">Dashboard</h1>
      <div className="btn-toolbar mb-3 mb-md-0">
        <div className="btn-group me-3">
          <Button
            variant={isSelected(0) ? "dark" : "light"}
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => props.onClick(0)}
          >
            Date
          </Button>
          <Button
            variant={isSelected(1) ? "dark" : "light"}
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => props.onClick(1)}
          >
            Meter
          </Button>
          <Button
            variant={isSelected(2) ? "dark" : "light"}
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => props.onClick(2)}
          >
            Type
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EnergyControlPanel;
