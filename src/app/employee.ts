export interface Employee {
    id: number;
    firstname: string;
    lastname: string;
    jobTitle?: string;
    birthDate?: Date;
    phoneNumber?: string;
    personalMail?: string;
    professionalMail?: string;
    isExecutive?: boolean;
}
