export type Trip = {
    vehicleId: string;
    description: string;
    timestampAtBegin: Date;
    timestampAtEnd: Date;
    odometerAtBegin?: number;
    odometerAtEnd?: number;
    routeDescription?: string;
};
