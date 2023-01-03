import { ReactComponent as Add } from "./ic-add.svg";
import { ReactComponent as Eye } from "./ic-eye.svg";
import { ReactComponent as Logo } from "./ic-logo.svg";
import { ReactComponent as Input } from "./ic-input.svg";
import { ReactComponent as Person } from "./ic-person.svg";
import { ReactComponent as Search } from "./ic-search.svg";
import { ReactComponent as Create } from "./ic-create.svg";
import { ReactComponent as Delete } from "./ic-delete.svg";
import { ReactComponent as Profile } from "./ic-profile.svg";
import { ReactComponent as CloseEye } from "./ic-close-eye.svg";
import { ReactComponent as Checkmark } from "./ic-checkmark.svg";
import { ReactComponent as PersonGroup } from "./ic-group-person.svg";

export const icons = {
    add: Add,
    eye: Eye,
    logo: Logo,
    input: Input,
    person: Person,
    search: Search,
    create: Create,
    delete: Delete,
    profile: Profile,
    close_eye: CloseEye,
    checkmark: Checkmark,
    person_group: PersonGroup
};

export type IconKeys = keyof typeof icons;
