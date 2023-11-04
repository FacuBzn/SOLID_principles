(() => {

    // Aplicando el principio de responsabilidad única
    //priorizar la composocion frente a la herencia

    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    class Person {
        public birthdate: Date;
        public gender   : Gender;
        public name     : string;

        constructor({ name, gender, birthdate }: PersonProps ){
            this.name      = name;
            this.gender    = gender;
            this.birthdate = birthdate;
        }
    }


    interface UserProps {       
        email     : string;               
        role      : string;
    }

    class User {        
        public email: string;
        public role : string;
        public lastAccess: Date;

        constructor({           
            email,   
            role,
        }: UserProps ) {        
            this.lastAccess = new Date();
            this.email = email;
            this.role  = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }

    class Settings {
        public lastOpenFolder  : string;
        public workingDirectory: string;

        constructor({
            lastOpenFolder,   
            workingDirectory,
        }: Settings ) {        
            this.lastOpenFolder   = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProps {
        birthdate        : Date;
        email            : string;
        gender           : Gender;
        lastOpenFolder   : string;
        name             : string;
        role             : string;
        workingDirectory : string;
    }


    class UserSettings { //clase composicion
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name,gender,birthdate,
            email, role, 
            lastOpenFolder, workingDirectory,
        }: UserSettingsProps) {
            this.person = new Person({ name,gender,birthdate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });


})();