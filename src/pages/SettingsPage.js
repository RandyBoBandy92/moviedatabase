import { useContext } from "react";
import { GlobalContext } from "../GlobalState";
import {Modal, Button} from 'react-bootstrap';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SettingsPage = (props) => {
  const { settings, toggleSetting } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checked = settings.nicCageMode ? "checked" : "";

  return (
          <>
          <Button variant="warning" onClick={handleShow}>
            Settings
          </Button>
          <Modal  {...props}
           size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered show={show} onHide={handleClose} 
            >
            
            <Modal.Header closeButton>
              <Modal.Title className="settings-modal">Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body><h3 className="settings-modal">Cage Mode</h3>
            <div>
            <label className="switch">
              <input
                   checked={settings.nicCageMode ? "checked" : false}
                  onChange={() => toggleSetting("nicCageMode")}
                  type="checkbox"  
              />
              <span class="slider round"></span>
            </label>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="warning" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>   
  );
};
export default SettingsPage;

