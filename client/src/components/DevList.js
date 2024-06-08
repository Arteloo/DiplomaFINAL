import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import {observer} from 'mobx-react-lite'
import DevItem from "./DevItem";

const DevList = observer(() => {
    const {Material} = useContext(Context)
    return (
        <Row className="d-flex justify-content-between">
            {Material.Developers.map(mat => 
                <DevItem key={Material.Developers.id} mat={mat}/>
            )}
        </Row>
    );
});

export default DevList;