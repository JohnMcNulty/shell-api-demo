function EnergyControlPanel() {
    return (
        <div
            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>
            <div className="btn-toolbar mb-3 mb-md-0">
                <div className="btn-group me-3">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Date</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Meter</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Type</button>
                </div>

            </div>
        </div>
    );
}

export default EnergyControlPanel;





