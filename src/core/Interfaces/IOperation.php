<?php
/* ----------------------------------------------------------------------------
 * Easy!Appointments - WordPress Plugin
 *
 * @license GPLv3
 * @copyright A.Tselegidis (C) 2016
 * @link http://easyappointments.org
 * @since v1.0.0
 * ---------------------------------------------------------------------------- */

namespace EAWP\Core\Interfaces;

/**
 * Operation Interface
 *
 * Defines a solid interface for all plugin operations so that they have the same public API.
 */
interface IOperation {
    /**
     * Invoke Library
     *
     * This method must define the operation logic that will execute a specific task. Every plugin
     * operation must define a single task.
     */
    public function invoke();
}
