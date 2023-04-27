
const OnlyButtonsWaiter = ({ onBreakfastClick, onLunchClick }) => {
    return (
        <div className="rowFilter">
            <div className="onlyButtons">
                <button onClick={onBreakfastClick} className="breakFast">
                    Desayuno
                </button>
                <button onClick={onLunchClick} className="lunch">
                    Almuerzo
                </button>
            </div>
        </div>
    );
};

export default OnlyButtonsWaiter;