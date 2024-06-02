import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import MainItem from "./MainItem";
import {observer} from 'mobx-react-lite'

const MainList = observer(() => {
    const {Material} = useContext(Context)
    return (
        <Row className="d-flex justify-content-between">
            {Material.Refractories.map(mat => 
                <MainItem key={Material.id} mat={mat}/>
            )}
        </Row>
    );
});

export default MainList;