import Modal from './Modal';
import Button from './Button';
export default function Dialog({ open, title, message, confirmLabel = 'Confirm', onConfirm, onClose }) { return <Modal open={open} title={title} onClose={onClose}><p className="text-white/65">{message}</p><div className="mt-6 flex justify-end gap-3"><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={onConfirm}>{confirmLabel}</Button></div></Modal>; }
