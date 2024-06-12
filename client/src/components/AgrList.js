import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import {observer} from 'mobx-react-lite'
import AgrItem from "./AgrItem";

const AgrList = observer(() => {
    const {Material} = useContext(Context)
    return (
        <Row className="d-flex justify-content-between">
            {Material.Machines.map(mat => 
                <AgrItem key={Material.Machines.id} mat={mat}/>
            )}
        </Row>
    );
});

export default AgrList;