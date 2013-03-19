'use strict';
module.exports = function (grunt) {
    grunt.initConfig({

        jshint: {
            all: ['src/**/*.js', '!src/test/resources/**/*'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true,
                es5: true,
                globals: {
                    beforeEach: true,
                    afterEach: true,
                    describe: true,
                    it: true,
                    expect: true,
                    waitsFor: true,
                    runs: true,
                    jasmine: true,
                    createSpy: true
                }
            }
        },
        list_files: {
            test: {
                dest: 'target/result.xml',
                includes: ['**/*.js', '!**/~*'],
                base: 'src/test/resources',
                itemTemplate: '\t\t<entry>' +
                    '\n\t\t\t<key>skin.<%= Class %></key>' +
                    '\n\t\t\t<value><%= Package %>.<%= Class %></value>' +
                    '\n\t\t</entry>',
                itemSeparator: '\n',
                listTemplate: '<hashtableWrapper>' +
                    '\n\t<hashtable>\n<%= items %>\n\t</hashtable>' +
                    '\n</hashtableWrapper>'
            }
        }

    });

    grunt.loadTasks("src/main/javascript/tasks");
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'list_files']);

};