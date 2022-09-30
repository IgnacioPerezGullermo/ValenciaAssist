import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAbout(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sobre nosotros
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>¿Que ofrecemos?</h4>
        <p>
          Nuestros servicios pueden solicitarse de forma particular, enfocados
          en necesidades puntuales, o pueden articularse como un beneficio
          laboral en colaboración con el empleador, para contribuir con la
          optimización del rendimiento y el sentido de pertenencia de su equipo
          de trabajo.
        </p>
        <p>
          Ofrecemos una amplia oferta de cursos, talleres y formaciones
          virtuales para acercar las distancias, derribar las barreras
          arquitectónicas, y garantizar el acceso a todo el público interesado.
          ¡Siempre habrá un profesional a cargo y dispuesto a responder!
        </p>
        <p>
          La mayor motivación para crear y mejorar cada día nuestra labor ha
          sido la experiencia de haber transitado en primera persona la
          necesidad de asistencia por parte de familiares muy queridos. Sabemos
          que es una etapa de la vida en la que conviven emociones,
          sentimientos, obligaciones y cambio de roles que, en ocasiones, pueden
          incluso desatar crisis personales. Cada familia enfrentará la
          situación con diferentes recursos, pero quienes la hemos andado
          sabemos lo importante que es contar, llegado el momento, con el
          acompañamiento, la información y el quehacer necesario para que cada
          familia pueda afrontarlo con la tranquilidad y el respeto que todos
          los seres humanos merecen.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalAbout;
