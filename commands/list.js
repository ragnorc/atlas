import * as Projects from './projects'
import * as Domains from './domains'
import * as Utilities from './utilities'
import All from './all'


const items = {
    menu: [
    {
        key: "all",
        label: "Show all commands",
        value: All
    },
    {
        key: "projects",
        label: "Projects",
        value: Projects.Projects
    },
    {
        key: "domains",
        label: "Domains",
        value: Domains.Domains
    },
    {
        key: "utilities",
        label: "Utilities",
        value: Utilities.Utilities
    }
],
domains: [
    {
        key: "buy-domain",
        label: "Buy a domain",
        value: Buy
    }
]

}
