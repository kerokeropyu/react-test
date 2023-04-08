const Modal = method => {
    return (<>
        <div>
            <div className="modal__inner">
            <div className="modal__close" onClick={method(false)}><i className="fa fa-times"></i></div>
            <img src="sunset.jpg" alt="" width="" height="" />
            </div>
            <div className="modal__background" onClick={method(false)}></div>
        </div>
    </>);
  }
  export default Modal;