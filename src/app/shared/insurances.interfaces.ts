export interface Insurance {
    id: string;
    name: string;
    insuredActions: insuredAction[];
}

interface insuredAction {
    start: string;
    end: string;
    price: number;
}
