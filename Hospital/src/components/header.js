import React from "react";
import { Card,CardBody } from "reactstrap";
function header({name,title})
{
    return(
        <div>
            <Card className="my-1 bg-primary">
                <CardBody>
                    <h1 className="text-center my-4">Book Your Appointment </h1>
                </CardBody>
            </Card>
        </div>
    );
}

export default header;