import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";

export default function LayoutAdmin() {
    return(
        <Layout>
            <Menu>
                <Menu.Item>
                    <Link to="/">Link 1</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/test">Link 2</Link>
                </Menu.Item>
            </Menu>
        </Layout>
    )
}