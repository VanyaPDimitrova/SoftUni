import Modal from '../common/modal/Modal';
import LogInRegister from './LogInRegister';

function LogInRegisterModal({ open, close }) {
    const modalHeader = 'Log in/Register';

    return (
        <Modal
            open={open}
            close={close} 
            header={modalHeader}
            content={<LogInRegister />}
        />
    );
}

export default LogInRegisterModal;
