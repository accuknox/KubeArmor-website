/* eslint-disable import/prefer-default-export */
export const demoCode = {
  code1: `
      apiVersion: security.accuknox.com/v1
      kind: KubeArmorPolicy
      metadata:
        name: ksp-wordpress-config-block
        namespace: wordpress-mysql
      spec:
        severity: 10
        selector:
          matchLabels:
            app: wordpress
        file:
          matchPaths:
          - path: /var/www/html/wp-config.php
            fromSource:
            - path: /usr/sbin/apache2
            action: Allow
          - path: /var/www/html/wp-config.php
            action: Block
      `,
  code2: `
      apiVersion: security.accuknox.com/v1
      kind: KubeArmorPolicy
      metadata:
        name: ksp-wordpress-process-block
        namespace: wordpress-mysql
      spec:
        severity: 3
        selector:
          matchLabels:
            app: wordpress
        process:
          matchPaths:
          - path: /usr/bin/apt
          - path: /usr/bin/apt-get
        action: Block
      `,
  code3: `
    apiVersion: security.accuknox.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: ksp-mysql-dir-audit
      namespace: wordpress-mysql
    spec:
      severity: 5
      selector:
        matchLabels:
          app: mysql
      file:
        matchDirectories:
        - dir: /var/lib/mysql/
          recursive: true
      action: Audit
    `,
  code4: `
    apiVersion: security.accuknox.com/v1
    kind: KubeArmorPolicy
    metadata:
      name: ksp-wordpress-sa-block
      namespace: wordpress-mysql
    spec:
      severity: 8    
      tags: ["MITRE"]    
      message: "block the k8s credential access"    
      selector:    
        matchLabels:    
          app: wordpress
      file:
        matchDirectories:           
        - dir : /run/secrets/kubernetes.io/serviceaccount/           
          recursive: true
      action: Block
    `
};
