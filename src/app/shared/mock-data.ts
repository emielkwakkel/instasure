import { Insurance } from "./insurances.interfaces";

export const INSURANCES: Insurance[] = [
    {
        id: 'ebike',
        name: 'E-bike',
        insuredActions: [
            {
                start: 'Apr 06 2019 09:00:00',
                end: 'Apr 06 2019 18:00:00',
                price: 1.25,
            },
            {
                start: 'Mar 06 2019 09:00:00',
                end: 'Mar 06 2019 18:00:00',
                price: 2.25,
            }
        ]
    },
    {
        id: 'car',
        name: 'Peugeot 208',
        insuredActions: [
            {
                start: 'Apr 06 2019 09:00:00',
                end: 'Apr 06 2019 18:00:00',
                price: 2.75,
            },
            {
                start: 'Mar 06 2019 09:00:00',
                end: 'Mar 06 2019 18:00:00',
                price: 2.25,
            }
        ]
    }
];
