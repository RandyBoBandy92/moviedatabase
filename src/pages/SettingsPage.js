import { useContext } from "react";
import { GlobalContext } from "../GlobalState";

const SettingsPage = () => {
  const { settings, toggleSetting } = useContext(GlobalContext);

  const checked = settings.nicCageMode ? "checked" : "";

  return (
    <main>
      <h2>Settings</h2>
      <span className="setting">
        <h3>Nic Cage Mode</h3>
        <input
          checked={settings.nicCageMode ? "checked" : false}
          onChange={() => toggleSetting("nicCageMode")}
          type="checkbox"
        />
      </span>
    </main>
  );
};

export default SettingsPage;
