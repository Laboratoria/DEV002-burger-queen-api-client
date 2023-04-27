const OnlyButtonsWaiter = ({ onBreakfastClickWaiter, onLunchClickWaiter }) => {
    return (
        <div className="rowFilter">
            <div className="onlyButtons">
                <button onClick={onBreakfastClickWaiter} className="breakFast">
                    Desayuno
                </button>
                <button onClick={onLunchClickWaiter} className="lunch">
                    Almuerzo
                </button>
            </div>
        </div>
    );
};

export default OnlyButtonsWaiter;