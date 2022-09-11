import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    checkUser(userForChecking: any): Promise<{
        encryptedId: {
            iv: string;
            content: string;
        };
        message?: undefined;
    } | {
        message: string;
        encryptedId?: undefined;
    }>;
    createUser(createUserDto: any): Promise<{
        message: string;
        encryptedId?: undefined;
    } | {
        encryptedId: {
            iv: string;
            content: string;
        };
        message?: undefined;
    }>;
}
