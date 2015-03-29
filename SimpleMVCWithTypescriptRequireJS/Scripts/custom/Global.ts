import GlobalInterfaces = require('globalinterfaces');
import GlobalEnums = require('globalenums');

declare module Global {
    export import Interfaces = GlobalInterfaces;
    export import Enums = GlobalEnums;
}
