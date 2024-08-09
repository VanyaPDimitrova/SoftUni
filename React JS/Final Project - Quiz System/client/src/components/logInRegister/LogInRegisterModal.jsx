import Modal from '../common/modal/Modal';
import LogInRegister from './LogInRegister';

function LogInRegisterModal({ close }) {
    const modalHeader = 'Log in/Register';

    return (
        <Modal 
            close={close} 
            header={modalHeader}
            content={<LogInRegister />}
        />
    );
}

export default LogInRegisterModal;
