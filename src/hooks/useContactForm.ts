import { useReducer } from 'react';

export const initialContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  agreed: false,
};

export enum eContactActions {
  CONTACT_FIRST_NAME = 'CONTACT_FIRST_NAME',
  CONTACT_LAST_NAME = 'CONTACT_LAST_NAME',
  CONTACT_EMAIL = 'CONTACT_EMAIL',
  CONTACT_PHONE = 'CONTACT_PHONE',
  CONTACT_MESSAGE = 'CONTACT_MESSAGE',
  CONTACT_AGREED = 'CONTACT_AGREED',
}

interface iContactAction {
  type: eContactActions;
  payload: iContactState;
}

export interface iContactState {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  agreed?: boolean;
}

export const useContactForm = (): [contactState: iContactState, dispatch: React.Dispatch<iContactAction>] => {
  const [contactState, dispatch] = useReducer(reducer, initialContactFormState);

  function reducer(contactState: typeof initialContactFormState, action: iContactAction) {
    const { type, payload } = action;
    switch (type) {
      case eContactActions.CONTACT_FIRST_NAME:
        return { ...contactState, firstName: payload.firstName };
      case eContactActions.CONTACT_LAST_NAME:
        return { ...contactState, lastName: payload.lastName };
      case eContactActions.CONTACT_EMAIL:
        return { ...contactState, email: payload.email };
      case eContactActions.CONTACT_PHONE:
        return { ...contactState, phone: payload.phone };
      case eContactActions.CONTACT_MESSAGE:
        return { ...contactState, message: payload.message };
      case eContactActions.CONTACT_AGREED:
        return { ...contactState, agreed: payload.agreed };
      default:
        throw new Error();
    }
  }
  return [contactState, dispatch];
};
