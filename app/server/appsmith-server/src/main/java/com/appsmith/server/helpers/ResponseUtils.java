package com.appsmith.server.helpers;

import com.appsmith.server.helpers.ce.ResponseUtilsCE;
import com.appsmith.server.migrations.JsonSchemaVersions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class ResponseUtils extends ResponseUtilsCE {

    public ResponseUtils(JsonSchemaVersions jsonSchemaVersions) {
        super(jsonSchemaVersions);
    }
}