import {IPersona} from "~/types/Persona.interface";

const useCurrentPersona = (action: 'get' | 'reset' | 'set' | 'initialize', persona?: IPersona) => {

    const currentPersona: IPersona = JSON.parse(localStorage.getItem('currentPersona') || '{}');

    const setCurrentPersona = (persona: IPersona) => {
        localStorage.setItem('currentPersona', JSON.stringify(persona));
    }

    const resetCurrentPersona = () => {
        localStorage.removeItem('currentPersona');
    }

    const initializeCurrentPersona = () => {
        const currentPersona = JSON.parse(localStorage.getItem('currentPersona') || '{}');
        console.log('initializeCurrentPersona', currentPersona);
        return currentPersona.id ? currentPersona : {};
    }

    if (!(currentPersona instanceof Error)) {
        switch (action) {
            case 'set':
                if (!!persona) setCurrentPersona(persona);
                break;
            case 'initialize':
                initializeCurrentPersona();
                break;
            case 'reset':
                resetCurrentPersona();
                break;
            case 'get':
            default:
                return currentPersona as IPersona;
        }
        return currentPersona;
    } else {
        console.error(currentPersona);
        resetCurrentPersona();
        return {};
    }

}

export default useCurrentPersona;