import { EventDTO } from "../../models/EventDto";

export class eventContext {
    private static instance: eventContext;

    private eventData: EventDTO | undefined;
    private hooks: { id: string, func: Function }[] = [];

    private constructor() { }

    public static getInstance(): eventContext {
        if (!eventContext.instance) {
            eventContext.instance = new eventContext();
            this.instance.fetchData();
        }

        return eventContext.instance;
    }

    private fetchData = async () => {
        // load form firebase
    }

    subscribeForUpdates = (func: (a: EventDTO) => void) => {
        const id = "some id"
        this.hooks.push({ id, func });
        return id;
    }

    unsubscribeForUpdates = (id: string) => {
        const index = this.hooks.findIndex(x => x.id === id);
        this.hooks.splice(index, 1);
    }

    public getData = async () => {
        return this.eventData;
    }

}
