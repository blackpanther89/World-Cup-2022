import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Rules() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div className='draw-rules'>
        <Button variant="primary" onClick={handleShow}>
          Draw Rules
        </Button>
  
        <Modal show={show} onHide={handleClose}>
            <Modal.Title>World Cup 2022 - Auslosungsregeln</Modal.Title>
          <Modal.Body>
<p>Es gibt 4 Töpfe, in denen die Nationalmannschaften nach dem FIFA-Koeffizienten eingestuft werden. In Topf 1 befinden sich z.B. die am höchsten eingestuften Mannschaften, und in Topf 4 die am niedrigsten eingestuften Mannschaften. Von dort aus werden die Mannschaften nach dem Zufallsprinzip ausgewählt und in 8 Gruppen zu je 4 Mannschaften eingeteilt, so dass jede Gruppe einen Vertreter aus einem Topf hat.</p>

<h5>Zusätzliche Regeln:</h5>

<p>- Es darf nicht mehr als eine Mannschaft aus den Konföderationen Südamerika, Nord- und Mittelamerika, Afrika, Asien und Ozeanien in der Gruppe sein.</p>
<p>- Es dürfen nicht mehr als zwei Mannschaften aus der Konföderation Europa in der Gruppe sein.</p>


<p>- Katar als WM-Gastgeber wird automatisch am Anfang in die Gruppe A eingefügt .</p></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
      </>
    );
}
