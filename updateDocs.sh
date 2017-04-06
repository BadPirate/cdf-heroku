if [ ! -e "codegen.jar" ]; then
    curl http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.2.2/swagger-codegen-cli-2.2.2.jar -o codegen.jar
    chmod 755 codegen.jar
fi
rm -rf docs
java -jar ./codegen.jar generate -i ./swagger.yml -l html2 -o docs

