export interface POffice {
    Message: string,
    Status: string,
    PostOffice: PostOfficeDetails[];
}

export interface PostOfficeDetails {
    Name: string,
    Description: string,
    BranchType: string,
    DeliveryStatus: string,
    Circle: string,
    District: string,
    Division: string,
    Region: string,
    State: string,
    Country: string
}