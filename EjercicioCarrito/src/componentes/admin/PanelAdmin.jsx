import { Link } from "react-router-dom";
import { Dashboard, Group,  Category, SsidChart, Settings} from "@mui/icons-material";


const PanelAdmin = ()=>{
    return (
      <aside className="nav-admin">
        <nav className="">
          <ul>
            <li>
              <Link to="/Admin" className="link">
                <Dashboard />
                <span>&nbsp;Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/Usuarios" className="link">
                <Group />
                <span>&nbsp;Usuarios</span>
              </Link>
            </li>
            <li>
              <Link to="/Productos" className="link">
                <Category />
                <span>&nbsp;Productos</span>
              </Link>
            </li>
            <li>
              <Link to="/Ventas" className="link">
                <SsidChart />
                <span>&nbsp;Ventas</span>
              </Link>
            </li>
            <li>
              <Link href="/Configuracion" className="link">
                <Settings />
                <span>&nbsp;Ajustes</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );

}


export default PanelAdmin;