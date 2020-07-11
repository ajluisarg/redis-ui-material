const strings = {
    error: {
        cleared_license: 'Cleared license',
        invalid_license: 'Invalid license',
        server_error: 'Server error, please try again',
    },
    title: {
        jsonRecursive: 'Expanding all leafs',
        name: 'P3X Redis UI',
        nameDonated: 'P3X Redis UI+',
        main: 'You may choose a Redis connection to connect from the left bottom menu.',
        statistics: 'Statistics',
        error: 'Error',
        connectingRedis: 'Connecting to Redis ...',
        socketioConnectError: 'Socket.IO Error',

        db: 'DB',
        server: 'Server',
        clients: 'Clients',
        memory: 'Memory',
        persistence: 'Persistance',
        stats: 'Statistics',
        replication: 'Replication',
        cpu: 'CPU',
        cluster: 'Cluster',
    },
    confirm: {
        title: 'Confirm',
        alert: 'Alert',
        info: 'Info',
        deleteListItem: 'Are you sure to delete this list item?',
        deleteHashKey: 'Are you sure to delete this hash key item?',
        deleteSetMember: 'Are you sure to delete this set member?',
        deleteZSetMember: 'Are you sure to delete this sorted set member?',
        deleteConnection: 'Confirm',
        deleteConnectionText: 'Are you sure to delete this Redis connection?',
        deleteNode: 'Are you sure to delete this Redis node?',
        deleteAllKeys: (opts) => {
            return `Delete this tree and all it\'s keys (${opts.key})?`
        },
        socketioConnectError: 'Socket.IO cannot connect to the server, you can reload and you might to resolve the connection error by yourself, the client does not know to solve it by itself.',
        deleteKey: 'Are you sure to delete this key?',
        rename: {
            title: 'Are you sure to rename this key?',
            textContent: 'If you click the rename button, it will rename this key forever.',
            placeholder: 'The Redis key (required)',

        },
        ttl: {
            title: 'Are you to change this keys\'s TTL?',
            textContent: 'If you click the change TTL button, it will rename this key\'s time to live, empty will persist this key keep forever.',
            placeholder: 'The Redis key\'s TTL (integer or empty)',
        },
        license: {
            title: 'Enable donated license?',
            textContent: 'If you want to use the donated functions, please contact alabard@gmail.com to request a license. The donation is $1/month.',
            placeholder: 'License key',
        },
    },
    language: {
        // When you translate the english name, keep the Language in English
        // eg. Inglés / English
        en: 'English',
        zn: 'Chinese / 中文'
    },
    intention: {
        copy: 'Copy',
        saveWithFormatJson: 'Save with format',
        formatJson: 'Format Json',
        pubsubMonitor: 'PubSub Monitor',
        // When you translate the language, keep the Language in English
        // eg. Idioma / Language
        language: 'Language',
        ok: 'OK',
        addKey: `Add to this key`,
        addKeyRoot: 'Add a root key',
        reloadKey: 'Reload key',
        reload: 'Reload',
        close: 'Close',
        commands: 'Commands',
        view: 'View',
        statistics: 'Statistics',
        refresh: 'Refresh',
        clear: 'Clear',
        rename: 'Rename',
        main: 'Home',
        cancel: 'Cancel',
        theme: 'Theme',
        github: 'GitHub',
        githubRepo: 'Repository',
        githubTodo: 'To do',
        githubChangelog: 'Change log',
        settings: 'Settings',
        connect: 'Connect',
        disconnect: 'Disconnect',
        overview: 'Overview',
        console: 'Console',
        noConnections: 'No connections, add a connection in the settings menu.',
        noConnectionsInSettings: 'No connections, you may add a NEW CONNECTION above.',
        connectionAdd: 'New connection',
        extend: 'Extend',
        collapse: 'Collapse',
        add: 'Add',
        edit: 'Edit',
        save: 'Save',
        ttl: 'Set TTL',
        license: 'Set license',
        'delete': 'Delete',
        remove: 'Remove',
        'sure': 'Sure',
        testConnection: 'Test connection',
        getKey: 'Loading Redis key and associated data ...',
        jsonViewShow: 'Display JSON tree',
        jsonViewEditor: 'Edit JSON',
    },
    label: {
        unableToLoadKey: ({ key }) => {
          return `Unable to load this key: ${key}. The exact error is in the console.`
        },
        bigJson: 'This JSON object is over 10 kb, so make sure you know what you doing, because some functions can be slow rendering.',
        addNode: 'Add node',
        validateJson: 'Validate JSON',
        reducedFunction: `Reduced functionality`,
        tooManyKeys: (opts) => {
            return `For the full maximum functions allowed keys total is ${opts.maxLightKeysCount} count. This database has over the allowed keys in total ${opts.count}. The key sorting and the additional fancy tree information is disabled. The searching is happening only on the server instead the client search.`;
        },
        redisCommandNotFound: 'No Redis command match found ...',
        treeKeyStore: `The sorting (natural compare) is executed on the client aka the browser, which means it has a penalty for big large sets, like over 10k keys, it might add a little time to the page rendering. There is no key sorting in Redis, only like this.`,
        socketIoTimeout: (options) => {
            return `The Socket.IO timed out for this request (max ${options.timeout / 1000} seconds) ...`;
        },
        resizerInfo: (options) => {
            return `Left or right panel minimum width is ${options.width}px`
        },
        jsonViewNotParsable: 'This value is not JSON parsable  ',
        ttlTitle: 'Set the TTL in seconds',
        passwordSecure: 'The password might will be empty, but still it will show characters, this is a security feature.',
        treeSeparatorEmpty: 'If the tree separator is empty, the tree wil have no nested nodes, just a pure list',
        treeSeparatorEmptyNote: 'No nested nodes, just a pure list',
        welcomeConsole: 'Welcome to the Redis Console',
        welcomeConsoleInfo: 'TAB or SHIFT + TAB completion like bash is enabled',
        welcomeConsoleInfo2: 'Cursor UP or DOWN history is enabled',
        redisListIndexInfo: 'Empty to append, -1 to prepend or save it to the position shown.',
        console: 'Console',
        connectiondAdd: 'Add connection',
        connectiondEdit: 'Edit connection',
        connectiondView: 'View connection',
        connections: 'Connections',
        keysSort: {
            on: 'Key sorting on',
            off: 'Key sorting off'
        },
        awsElastiCache: {
            on: 'AWS ElastiCache / Gcloud memorystore on',
            off: 'AWS ElastiCache / Gcloud memorystore off',
        },
        azure: {
            on: 'Azure Redis on',
            off: 'Azure Redis off',
        },
        cluster: {
            on: 'Cluster on',
            off: 'Cluster off',
        },
        theme: {
            light: 'Light',
            dark: 'Dark',
            darkoBluo: 'Darko bluo',
            enterprise: 'Enterprise',
            redis: 'Redis',
        },
        connected: (opts) => {
            return `Connected: ${opts.name}`
        },
        tree: 'Tree',

    },
    status: {
        dataCopied: 'The data is in the clipboard',
        licenseSaved: 'License saved',
        nodeRemoved: 'Node removed',
        keyIsNotExisting: 'This key could have been deleted or expired.',
        keyCount: (opts) => {
            if (opts.keyCount === 0) {
                return 'No key'
            } else if (opts.keyCount === 1) {
                return '1 key'
            } else {
                return `${opts.keyCount} keys`
            }

        },
        treeExpandAll: 'Expand all tree leafs, this has a cost, might take time ...',
        noRedisKeys: 'There are no keys in this database.',
        redisConnected: 'Redis connected successful',
        reloadingDataInfo: 'Reloading Redis data info',
        added: 'Added',
        saved: 'Updated',
        cancelled: 'Cancelled',
        deleted: 'Deleted',
        savedRedis: 'Redis data is saved',
        redisDisconnected: (opts) => {
            return `The current connection had an error: ${opts.error.message}`
        },
        dbChanged: (opts) => {
            return `The db index set to ${opts.db}. `
        },
        treeDeleted: (opts) => {
            return `The tree key was deleted (${opts.key}).`

        },
        deletedKey: (opts) => {
            return `The key was deleted (${opts.key}).`
        },
        renamedKey: 'This key has been renamed',
        ttlChanged: 'This key\'s TTL has been changed',
        notInteger: 'This input is not an integer',
        persisted: 'This key is persisted forever',
        set: 'The key is set/added'
    },
    code: {
        'delete-connection': 'This connection was deleted, so you are disconnected to this Redis instance.',
        'save-connection': 'This connection was changed, so you are disconnected to this Redis instance. You may re-connect.',
        'readonly-connections': 'Connections add/save/delete are readonly only!',
        'list-out-of-bounds': 'This list index is out of bounds',
        'donation-ware-feature': 'This feature is present in the donation version.',
    },
    form: {
        error: {
            required: 'Required',
            port: 'The port is between 1-65535',
            invalid: 'The form is invalid'
        },
        connection: {
            label: {
                name: 'Name',
                host: 'Hostname',
                port: 'Port',
                password: 'Password',
            },
        },
        treeSettings: {
            maxValueDisplay: 'Max value display string length',
            maxValueDisplayInfo: 'If max value display zero, it shows everything, if it is bigger than 0, it will truncate. If it is -1, it will not show the value without edit for strings, for others, it display everything.',
            maxKeys: 'The max key count',
            maxKeysInfo: 'So that the GUI does not crash, we limit the max key count.',
            keyCount: () => {
                return `Number of keys: ${p3xr.state.keysRaw.length}`
            },
            label: {
                animation: 'Use animation',
                noAnimation: 'No animation',
                jsonFormatTwoSpace: 'Format JSON with 2 spaces',
                jsonFormatFourSpace: 'Format JSON with 4 spaces',
                formName: 'Redis settings',
                searchModeClient: 'Client search mode',
                searchModeServer: 'Server search mode',
                searchModeStartsWith: 'Search with starts with mode',
                searchModeIncludes: 'Search includes mode',
            },
            field: {
                treeSeparator: 'Tree separator',
                page: 'Paging count',
                keysSort: 'Sort the keys',
                searchMode: 'Search mode',
                searchModeStartsWith: 'Search starts with / includes'
            },
            error: {
                page: 'The page count must be an integer between 10 - 1000',
                maxValueDisplay: 'The maximum display value must be an integer between -1 and 32768',
                maxKeys: 'The maximum key count value must be an integer between 100 and 100000',
            },

        },
        key: {
            label: {
                formName: {
                    add: 'Add new Redis key',
                    edit: 'Edit Redis key',
                    append: 'Add to existing Redis key',
                }
            },
            field: {
                key: 'Key',
                type: 'Type',
                index: 'Index',
                hashKey: 'Hash key',
                score: 'Score',
                value: 'Value',
            },
            error: {
                key: 'The key is, at least, one character',
                hashKey: 'The hash table key is at least one character',
                score: 'The sorted set score is required',
                value: 'The value is required',
            }
        },
        main: {
            label: {
                database: 'DB',
            }
        }
    },
    page: {
        overview: {
            noConnected: 'There is no connection to Redis.',
            overviewClients: 'List the connected by the count of clients',
            connectedCount: (opt) => {
                if (opt.length === 1) {
                    return '1 client'
                }
                return `${opt.length} clients`

            }
        },
        key: {
            label: {
                key: 'Key',
                encoding: 'Encoding',
                length: 'Size',
                ttl: 'TTL',
                ttlTitle: 'Time To Live',
                type: 'Type',
                ttlNotExpire: 'does not expire',
                lengthString: 'characters',
                lengthItem: 'items',
                actions: 'Actions',
            },
            list: {
                table: {
                    index: 'Index',
                    value: 'Value',
                }
            },
            hash: {
                table: {
                    hashkey: 'Hashkey',
                    value: 'Value',
                }
            },
            set: {
                table: {
                    value: 'Member'
                }
            },
            zset: {
                table: {
                    value: 'Member',
                    score: 'Score',
                }
            }

        },
        treeControls: {
            settings: 'Tree settings',
            expandAll: 'Expand all',
            collapseAll: 'Collapse all',
            search: {
                search: 'Search in the keys',
                clear: 'Clear current search to set empty',
                placeholderClient: 'Search client side',
                placeholderServer: 'Search server side',
                info: 'The client side search means, that it matches the text in the search input. The server side search means, that is it like search in the keys patterns as *{search-text}*. For large search sets, it is better to use server side searching. For smaller search sets, it is better to use client side search mode.' + ` If the keys count is over ${p3xr.settings.maxLightKeysCount}, you can only search on server side.`,
                largeSetInfo: 'In a large set, client side searching is disabled. so right now only server side searching is possible.',
                infoDetails: 'To find out how the search works, please check out the settings'
            },
            pager: {
                next: 'Next',
                prev: 'Previous',
                first: 'First',
                last: 'Last'
            }
        }
    },
    time: {
        years: 'years',
        months: 'months',
        days: 'days',
        year: 'year',
        month: 'month',
        day: 'day',
    },
    redisTypes: {
        string: 'String',
        list: 'List',
        hash: 'Hash table',
        set: 'Set',
        zset: 'Sorted set - zset'
    }
}


module.exports = strings;
