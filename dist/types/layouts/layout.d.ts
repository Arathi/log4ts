import { Log } from '../domains/log';
export interface Layout {
    render(log: Log): any[];
}
