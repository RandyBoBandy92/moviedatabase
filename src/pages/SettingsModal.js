import { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SettingsModal = (props) => {
  const { settings, toggleSetting } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Settings
      </Button>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="settings-modal">Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="settings-modal">Cage Mode</h3>
          <div>
            <label className="switch">
              <input
                checked={settings.nicCageMode ? "checked" : false}
                onChange={() => toggleSetting("nicCageMode")}
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <h3 className="settings-modal">Adult Search</h3>
          <div>
            <label className="switch">
              <input
                checked={settings.adultSearch ? "checked" : false}
                onChange={() => {
                  setShowMessage(true);
                  toggleSetting("adultSearch");
                }}
                type="checkbox"
              />
              <span className="slider round"></span>
            </label>
            {showMessage && (
              <p>Please reload the page for changes to take effect.</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {showMessage && (
            <Button variant="warning" onClick={() => window.location.reload()}>
              Reload
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SettingsModal;
